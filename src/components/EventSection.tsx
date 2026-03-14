import { useEffect, useState } from 'react';
import { supabase, Event } from '../lib/supabase';

interface EventMedia {
  id: string;
  event_id: string;
  media_url: string;
  media_type: 'image' | 'video';
  display_order: number;
}

export default function EventSection() {
  const [events, setEvents] = useState<Event[]>([]);
  const [mediaByEvent, setMediaByEvent] = useState<Record<string, EventMedia[]>>({});
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentEventId, setCurrentEventId] = useState<string | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    fetchEventsAndMedia();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen || !currentEventId) return;
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        const media = mediaByEvent[currentEventId];
        setCurrentMediaIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        const media = mediaByEvent[currentEventId];
        setCurrentMediaIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, currentEventId, mediaByEvent]);

  async function fetchEventsAndMedia() {
    try {
      const { data: eventsData, error: eventsError } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: false });

      if (eventsError) throw eventsError;

      const { data: mediaData, error: mediaError } = await supabase
        .from('event_media')
        .select('*')
        .order('display_order', { ascending: true });

      if (mediaError) throw mediaError;

      setEvents(eventsData || []);

      const mediaMap: Record<string, EventMedia[]> = {};
      (mediaData || []).forEach((media) => {
        if (!mediaMap[media.event_id]) {
          mediaMap[media.event_id] = [];
        }
        mediaMap[media.event_id].push(media);
      });
      setMediaByEvent(mediaMap);
    } catch (error) {
      console.error('Error fetching events and media:', error);
    } finally {
      setLoading(false);
    }
  }

  const openModal = (eventId: string, mediaIndex: number) => {
    setCurrentEventId(eventId);
    setCurrentMediaIndex(mediaIndex);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentEventId(null);
    setCurrentMediaIndex(0);
  };

  const prevMedia = () => {
    if (!currentEventId) return;
    const media = mediaByEvent[currentEventId];
    setCurrentMediaIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const nextMedia = () => {
    if (!currentEventId) return;
    const media = mediaByEvent[currentEventId];
    setCurrentMediaIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const renderCurrentMedia = () => {
    if (!currentEventId) return null;
    const media = mediaByEvent[currentEventId][currentMediaIndex];
    if (media.media_type === 'image') {
      return (
        <img
          src={media.media_url}
          alt="Event media"
          className="max-w-full max-h-full object-contain"
        />
      );
    } else {
      return (
        <video
          src={media.media_url}
          controls
          className="max-w-full max-h-full object-contain"
        />
      );
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-xl text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Events</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Stay updated with our latest activities, community outreach programs, and upcoming health initiatives.
      </p>

      <div className="space-y-12">
        {events.map((event) => (
          <div key={event.id} className="border-b border-gray-200 pb-12 last:border-b-0">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-8">
              <img
                src={event.image_url}
                alt={event.title}
                className="w-full sm:w-32 h-48 sm:h-32 object-cover rounded-lg flex-shrink-0 shadow-md"
              />

              <div className="flex-grow text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-900 leading-tight">
                    {event.title}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${
                      event.is_past
                        ? 'bg-gray-200 text-gray-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {event.is_past ? 'Past Event' : 'Upcoming'}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-600 mb-2 line-clamp-3 sm:line-clamp-none">
                  {event.description}
                </p>

                <p className="text-xs sm:text-sm text-gray-500">
                  {new Date(event.event_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            {mediaByEvent[event.id] && mediaByEvent[event.id].length > 0 && (
              <div className="media-gallery grid gap-4 grid-cols-2 lg:grid-cols-4">
                {mediaByEvent[event.id].map((media, index) => (
                  <div
                    key={media.id}
                    className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square group cursor-pointer"
                    onClick={() => openModal(event.id, index)}
                  >
                    {media.media_type === 'image' ? (
                      <img
                        src={media.media_url}
                        alt="Event media"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="relative w-full h-full bg-black flex items-center justify-center">
                        <video
                          src={media.media_url}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          controls
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                          <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-6 border-t-gray-900 ml-1"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {(!mediaByEvent[event.id] || mediaByEvent[event.id].length === 0) && (
              <div className="text-center py-8 text-gray-400">
                <p>No media available yet</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {events.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No events found.</p>
        </div>
      )}

      {modalOpen && currentEventId && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl hover:text-gray-300 z-10"
            >
              ×
            </button>
            <button
              onClick={prevMedia}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
            >
              ‹
            </button>
            <button
              onClick={nextMedia}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 z-10"
            >
              ›
            </button>
            <div className="flex justify-center items-center">
              {renderCurrentMedia()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
