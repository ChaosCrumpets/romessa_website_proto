
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill out all fields.' });
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    
    // Mock form submission
    console.log('Form submitted:', formData);
    setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent.' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <AnimatedSection id="contact" className="py-24 bg-white/60">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-pmu-text">Contact & Booking</h2>
          <div className="w-24 h-1 bg-pmu-accent-gold mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="h-80 w-full bg-gray-200 overflow-hidden rounded-lg shadow-md">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92695.6983870634!2d-80.55923233379854!3d43.45163931168128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf4fc4266152b%3A0x252570b677a83424!2sKitchener%2C%20ON!5e0!3m2!1sen!2sca!4v1684343412345"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="space-y-4 text-pmu-text/90">
                <p><strong>Email:</strong> contact@romessapmu.com</p>
                <p><strong>Phone:</strong> (519) 555-1234</p>
                <p><strong>Hours:</strong> Tues-Sat: 10am - 6pm</p>
            </div>
          </div>
          <div className="bg-pmu-bg p-8 rounded-lg shadow-md border border-pmu-accent-gold/20">
            <h3 className="font-serif text-3xl font-semibold mb-6 text-center">Book an Appointment</h3>
            <p className="text-center mb-6">Ready to enhance your natural beauty? Book your consultation or appointment through our secure online portal.</p>
            <a href="https://squareup.com/appointments/book/your-business" target="_blank" rel="noopener noreferrer" className="w-full text-center block bg-pmu-accent-rose text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Now
            </a>
            <div className="my-8 text-center text-gray-400">or send us a message</div>
            <form onSubmit={handleSubmit} noValidate>
                <div className="space-y-4">
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pmu-accent-rose focus:border-pmu-accent-rose outline-none transition"/>
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pmu-accent-rose focus:border-pmu-accent-rose outline-none transition"/>
                    <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={5} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-pmu-accent-rose focus:border-pmu-accent-rose outline-none transition"></textarea>
                </div>
                {formStatus.message && (
                  <p className={`mt-4 text-center ${formStatus.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>{formStatus.message}</p>
                )}
                <button type="submit" className="mt-6 w-full bg-pmu-text text-white p-3 rounded-md hover:bg-pmu-text/90 transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
