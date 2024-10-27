import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>FIT AURA</h1>
          <p>Want to run a challenge? </p>
          <p>Everything you need for a successful fitness challenge at a fraction of the cost.</p>
          
          <div className="cta-buttons">
            <button className="btn">Join Our Workshop Now</button>
            <button className="btn secondary">Register</button>
          </div>
        </div>
        <div className="hero-image">
          {/* Add image or placeholder */}
          <img src="https://img.pikbest.com/ai/illus_our/20230422/b9627908a09444e5f3f9ca12bc9a4f53.jpg!w700wp" alt="Fitness Trainer" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Our Fitness</h2>
        <ul>
          <li>Clean and Safe Environment</li>
          <li>Cutting-Edge Equipment</li>
          <li>Professional Trainers</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Happy Clients Say About Us</h2>
        <div className="testimonial">
          <img src="https://img.pikbest.com/ai/illus_our/20230422/b9627908a09444e5f3f9ca12bc9a4f53.jpg!w700wp" alt="Client" />
          <p>"Start with a personal trainer and obtain your fitness goals. Working with a trainer is the safest and most effective way to achieve your health and fitness goals."</p>
          <h4>Jacob Jones</h4>
          <p>Member</p>
        </div>
      </section>

      {/* Competition Sport Specific Training */}
      <section className="competition-training">
        <h2>Competition Sport Specific Training</h2>
        <p>Start with a personal trainer and obtain your fitness goals. The safest and most effective way to achieve your health and fitness goals.</p>
        <button className="btn">Try for Demo</button>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <h2>Online Package Pricing</h2>
        <div className="pricing-options">
          <div className="pricing-option">
            <h3>Basic Membership</h3>
            <p>$60/month</p>
          </div>
          <div className="pricing-option">
            <h3>Sports Membership</h3>
            <p>$60/month</p>
          </div>
          <div className="pricing-option">
            <h3>Standard Membership</h3>
            <p>$60/month</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
