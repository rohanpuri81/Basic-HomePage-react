function HeroSection(){
    return(
        <main className="hero container">
           <div className="hero_content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST. YOUR FEET DESERVE THE BEST.  YOUR FEET DESERVE THE BEST. YOUR FEET DESERVE THE BEST.  YOUR FEET DESERVE THE BEST.  YOUR FEET DESERVE THE BEST. </p>
           
            <div className="hero-btn">
                <button className="primary-btn">Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>

            <div className="shopping">
                <p>Also Available on</p>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon-logo" />
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
           </div>
           <div className="hero_image">
            <img src="/images/hero-image.png" alt="hero-image" />
           </div>
        </main>
    );
}


export default HeroSection;