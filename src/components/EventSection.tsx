import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    fetchEventsAndMedia();
  }, []);

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
      {/* 1. Added 'flex-col' for mobile, 'sm:flex-row' for larger screens */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-8">
        <img
          src={event.image_url}
          alt={event.title}
          /* 2. Adjusted image size to be slightly smaller on mobile to save vertical space */
          className="w-full sm:w-32 h-48 sm:h-32 object-cover rounded-lg flex-shrink-0 shadow-md"
        />
        
        <div className="flex-grow text-center sm:text-left">
          {/* 3. Responsive text size: 'text-lg' for mobile, 'sm:text-2xl' for desktop */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 leading-tight">
              {event.title}
            </h2>
            <span className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${
              event.is_past
                ? 'bg-gray-200 text-gray-800'
                : 'bg-green-100 text-green-800'
            }`}>
              {event.is_past ? 'Past Event' : 'Upcoming'}
            </span>
          </div>
          
          {/* 4. Description text scaling */}
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
    </div>
  ))}
</div>

            {mediaByEvent[event.id] && mediaByEvent[event.id].length > 0 && (
              <div className="media-gallery grid gap-4 grid-cols-2 lg:grid-cols-4">
                {mediaByEvent[event.id].map((media) => (
                  <div
                    key={media.id}
                    className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square group"
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
    </div>
  );
}
