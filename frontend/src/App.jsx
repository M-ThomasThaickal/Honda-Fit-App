import './App.css'
import BlogPost from './components/BlogPost'
/*import image1 from './images/image1.jpg'*/

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
        <BlogPost 
          title="First Autocross"
          date="October 24, 2025"
          content=
            "Addicting experience to say the least. Need to swap out my tires. The all-seasons
            were understeering about 50% of an entire run. Did beat a 2nd gen miata though at
            the shootout by an extra one-and-a-half car lengths(he gave me half a car length
            head start). It's not mentioned how awesome people are though. Got a couple ride-alongs
            and a guy even offered to sit with me because he also raced a Honda Fit. Met a helpful
            guy with a souped up CRX. Can't wait to come back for another event, hopefully with
            a new set of tires."
        />
        <BlogPost 
          title="Second Autocross"
          date="November 15, 2025"
          content=
            "Second autocross event. Got new tires after I shredded my Ascent Avid GTs.
            Upsized to 205/50/15 from 175/65/15 and got ultra-high-performance tires(Continental ECS02).
            Immediate difference when driving, you can feel the road a lot more, probably
            due to the shorter sidewall but because of the added grip it feels a lot less
            squirrel-y on the highway. Speaking of grip these things stick to the road like
            super glue. Completely different driving experience. I don't ever want to
            go back to regular all-seasons. The event itself was a lot better this time. At the
            end I definitely felt like I could've gone faster if it weren't for my lack of skill.
            I know what to improve on. Last autocross the tires held me back so much I didn't 
            even know how I could have improved my driving. Would be nice to get stiffer springs
            and maybe adjust camber up front. Still getting a decent amount of sidewall deflection
            even at 42 psi hot up front. Upped to 45 psi for the last run but still felt like
            I got a bit of deflection. Mentioned it in the previous blogpost but man are people
            helpful and nice. I got a ride along promised to me be by the guy with the souped
            up Honda Fit and he even offered to let me drive it. Met another person with a CRX, that
            thing was fast. Also, won an award :)." 
          /* add an image section to the blogpost component file? Max one per blog post makes
             sense as a blog post template. */
        />
      </section>

      <section className="maintenence-records">
        <h2>Maintenence Records</h2>
        <p>Coming soon...</p>
      </section>
    </div>
  )
}

export default App
