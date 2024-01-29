import React from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Header />
      <h2>About me</h2>
      <img src="https://placekitten.com/200/300" className='profile-img' alt="cat" />
      <h3>Section one</h3>
      <p>
      Chia tumeric meh venmo enamel pin bruh authentic cred tbh health goth deep v. Man bun narwhal man braid, thundercats 8-bit stumptown mlkshk squid etsy. 
      Jianbing chartreuse vape, kitsch yr pok pok fam. Cliche artisan YOLO ramps mumblecore gochujang air plant DSA synth craft beer. 
      Waistcoat humblebrag cardigan, enamel pin neutral milk hotel marxism vexillologist man bun hashtag jawn small batch roof party.
      Chia tumeric meh venmo enamel pin bruh authentic cred tbh health goth deep v. Man bun narwhal man braid, thundercats 8-bit stumptown mlkshk squid etsy. 
      Jianbing chartreuse vape, kitsch yr pok pok fam. Cliche artisan YOLO ramps mumblecore gochujang air plant DSA synth craft beer. 
      Waistcoat humblebrag cardigan, enamel pin neutral milk hotel marxism vexillologist man bun hashtag jawn small batch roof party.
      </p>
      <h3>Section two</h3>
      <p>
      Freegan truffaut kitsch bodega boys, retro pinterest artisan jianbing farm-to-table drinking vinegar hella schlitz. Street art echo park live-edge locavore hoodie. 
      Bodega boys stumptown franzen bushwick, glossier seitan squid palo santo iceland tumblr. Tofu bruh organic, marfa humblebrag meggings plaid neutra health goth chia heirloom wolf next 
      level fanny pack.
      Freegan truffaut kitsch bodega boys, retro pinterest artisan jianbing farm-to-table drinking vinegar hella schlitz. Street art echo park live-edge locavore hoodie. 
      Bodega boys stumptown franzen bushwick, glossier seitan squid palo santo iceland tumblr. Tofu bruh organic, marfa humblebrag meggings plaid neutra health goth chia heirloom wolf next 
      level fanny pack.
      </p>
      <Footer />
    </>
  )
}

export default Home