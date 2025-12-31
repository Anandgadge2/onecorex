import { motion } from 'framer-motion';
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Linkedin,
  Send,
} from 'lucide-react';
import contactBg from '../assets/contact-bg.jpg';
import qrCode from '../assets/QR.png';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={contactBg}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="label-elegant block mb-4"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="heading-hero"
          >
            <span className="text-primary">Contact</span> <span className="text-white">Us</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="label-elegant block mb-4">Let's Connect</span>
              <h2 className="heading-section mb-6">
                Start Your <span className="text-primary">Project</span>
              </h2>
              <div className="gold-line-lg mb-8" />
              <p className="body-elegant mb-10">
                Ready to transform your space? Whether you're planning a
                residential project, commercial fit-out, or simply exploring
                possibilities, we're here to help bring your vision to life.
              </p>

              <div className="space-y-8 mb-10">
                {/* Phone */}
                <a
                  href="tel:+971525315971"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      +971 52 531 5971
                    </p>
                  </div>
                </a>

                {/* Email & QR Wrapper */}
                <div className="flex items-center justify-between gap-6">
                  <a
                    href="mailto:info@onecorex.ae"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        info@onecorex.ae
                      </p>
                    </div>
                  </a>

                  {/* QR Code */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <div className="relative p-2 rounded-xl border border-primary/30 bg-white shadow-gold/10 shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:golden-glow">
                      <img
                        src={qrCode}
                        alt="Contact QR"
                        className="w-25 h-25 md:w-32 md:h-32 object-contain"
                      />
                      <div className="text-xs absolute -bottom-2 -right-2 bg-primary text-white text-[10px] px-2 py-0.8 rounded-full font-bold shadow-sm">
                        chat with us
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium hover:text-primary transition-colors text-balance">
                      First Floor, Princess Cars Building,
                      <br />
                      Near Oasis Mall, Sheikh Zayed Road,
                      <br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="label-elegant mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://wa.me/971525315971"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <MessageCircle size={20} />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/onecorex"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <Instagram size={20} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/company/onecorex"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 hover:border-primary hover:border-2 transition-all duration-500"
            >
              <h3 className="heading-card mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-white border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-white border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 000 0000"
                      className="bg-white border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Select
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                      value={formData.subject}
                      required
                    >
                      <SelectTrigger className="bg-white border-border focus:border-primary transition-all duration-300 hover:shadow-md hover:shadow-primary/5">
                        <SelectValue placeholder="Select Project Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="High-end Luxury Villas">High-end Luxury Villas</SelectItem>
                        <SelectItem value="Retails Spaces (Stores & Showrooms)">Retails Spaces (Stores & Showrooms)</SelectItem>
                        <SelectItem value="F&B (Restaurants & Cafés)">F&B (Restaurants & Cafés)</SelectItem>
                        <SelectItem value="Commercial Spaces and Corporate Offices">Commercial Spaces and Corporate Offices</SelectItem>
                        <SelectItem value="Entertainment Spaces">Entertainment Spaces</SelectItem>
                        <SelectItem value="Healthcare & Wellness">Healthcare & Wellness</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                    className="bg-white border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send size={18} />
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
