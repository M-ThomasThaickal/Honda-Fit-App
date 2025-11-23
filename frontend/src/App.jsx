import './App.css'
import BlogPost from './components/BlogPost'

function App() {
  

  return (
    <div className="container">
      <header>
        <h1>My 2012 Honda Fit</h1>
      </header>

      <section className="about-fit">
        <p>Why I love the Fit? That's a silly question, who <strong>doesn't</strong> love the Honda Fit?</p>

        <p>
          It's an awesome grocery getter. Its small, compact, lightweight, and the second generation
          is fairly mechanically simple meaning their easy to work on. Not to mention the interior space.
          I mean, Honda called these things a Fit for a reason. The high ceilings paired with the low
          floor make these things roomy even for 6' tall people, a feature not seen in many modern
          cars today. 
        </p>

        <p> 
          But that's the boring practical side of the car, the real fun of this car
          fun comes from its lightweight and exceptionally rigid chassis. The combo results in
          a car that can be chucked into corners at whatever speed its tiny 1.5L inline four could
          put out and make it out safe. An added bonus is VTEC, making noises that strike fear into 
          the hearts of no-do-good drivers while struggling to reach 5 miles per hour below the local
          speed limit.
        </p>

        <p>
          There's a huge aftermarket community for these cars. From people lowering them with 
          new rims, k-swapping them with motors out of an Acura TLX, to full on rear-wheel drive
          conversions and drifting them. The possibilities are near endless, and they are quickly
          reaching a point of support that can start to rival the massive Civic fanclub. 
        </p>

        <p>I got my Fit from my brother, after he got upgraded to a larger family car. I was lucky
          to have a brother who was into stick-shifts, even though he isn't a gearhead himself. I'm ever 
          so greatful for it though because of the almost 4 years I've had the car I've put on over 50,000 miles 
          and I have yet to grow tired of it.
          It's seen me make many great memories, both with just me and with my friends. I hope to keep it on
          the streets for years to come, maybe even frankensteining it to make it even more fearsome than it
          already is. 
        </p>
      </section>

      <section className="blog-posts">
        <h2>Blog Posts</h2>
        <p>Coming soon...</p>
        <BlogPost />
      </section>

      <section className="maintenence-records">
        <h2>Maintenence Records</h2>
        <p>Coming soon...</p>
      </section>
    </div>
  )
}

export default App
