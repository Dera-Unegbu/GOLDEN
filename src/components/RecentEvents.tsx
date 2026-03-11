import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase, Event } from '../lib/supabase';

export default function RecentEvents() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchRecentEvents();
  }, []);

  async function fetchRecentEvents() {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: false })
        .limit(3);

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching recent events:', error);
    }
  }

  if (events.length === 0) {
    return null;
  }

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/events" className="block text-center mb-12 group">
          <h2 className="text-4xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
            Our Recent Events
          </h2>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link
              key={event.id}
              to="/events"
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={event.image_url}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    event.is_past
                      ? 'bg-gray-700/80 text-gray-200'
                      : 'bg-green-600/90 text-white'
                  }`}>
                    {event.is_past ? 'Past Event' : 'Upcoming'}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">{event.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
