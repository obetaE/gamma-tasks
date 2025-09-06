import React from "react";
import styles from "./floral.module.css"

export default function floralPage(){
    return(
        <div className={styles.body}>
    {/*  Header Section */}
    <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.headercontent}>
                <a href="#" className={styles.logo}>Floral<span>Meets</span></a>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="#" className={styles.active}>Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#store">Store</a></li>
                        <li><a href="#booking">Booking</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    {/*  Hero Section */}
    <section className={styles.hero}>
        <div className={styles.herocontent}>
            <h1>Beautiful Flowers for Every Occasion</h1>
            <p>At FloralMeets, we bring nature's beauty right to your doorstep with our handcrafted floral arrangements.</p>
            <a href="#store" className={styles.btn}>Shop Now</a>
        </div>
    </section>

    {/*  Featured Products */}
    <section id="store">
        <div className={styles.container}>
            <h2 className={styles.sectiontitle}>Featured Bouquets</h2>
            <div className={styles.products}>
                <div className={styles.productcard}>
                    <div className={styles.productimg}></div>
                    <div className={styles.productinfo}>
                        <h3>Spring Blossom</h3>
                        <p>A vibrant mix of seasonal flowers</p>
                        <span className={styles.price}>$45.00</span>
                    </div>
                </div>
                
                <div className={styles.productcard}>
                    <div className={styles.productimg}></div>
                    <div className={styles.productinfo}>
                        <h3>Eternal Romance</h3>
                        <p>classNameic red roses for that special someone</p>
                        <span className={styles.price}>$65.00</span>
                    </div>
                </div>
                
                <div className={styles.productcard}>
                    <div className={styles.productimg}></div>
                    <div className={styles.productinfo}>
                        <h3>Summer Breeze</h3>
                        <p>Bright and cheerful seasonal selection</p>
                        <span className={styles.price}>$52.00</span>
                    </div>
                </div>
                
                <div className={styles.productcard}>
                    <div className={styles.productimg}></div>
                    <div className={styles.productinfo}>
                        <h3>White Elegance</h3>
                        <p>Pure white lilies and roses for any occasion</p>
                        <span className={styles.price}>$58.00</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  About Preview */}
    <section id="about" className={styles.aboutpreview}>
        <div className={styles.container}>
            <h2 className={styles.sectiontitle}>Our Story</h2>
            <p>FloralMeets began with a simple passion for bringing nature's beauty into everyday life. Founded in 2015, we've grown from a small local flower stand to a beloved community florist serving customers across the region.</p>
            <p>We work directly with local growers to ensure the freshest, most beautiful flowers for our customers while supporting sustainable farming practices.</p>
            <a href="#" className={styles.btn}>Learn More About Us</a>
        </div>
    </section>

    {/*  Blog Preview */}
    <section id="blog">
        <div className={styles.container}>
            <h2 className={styles.sectiontitle}>From Our Blog</h2>
            <div className={styles.blogposts}>
                <div className={styles.blogcard}>
                    <div className={styles.blogimg} ></div>
                    <div className={styles.blogcontent}>
                        <h3>Choosing the Perfect Flowers for Summer Weddings</h3>
                        <p>Summer weddings call for vibrant, heatresistant flowers that will look fresh throughout your special day.</p>
                        <a href="#" className={styles.readmore}>Read More</a>
                    </div>
                </div>
                
                <div className={styles.blogcard}>
                    <div className={styles.blogimg}></div>
                    <div className={styles.blogcontent}>
                        <h3>How to Make Your Cut Flowers Last Longer</h3>
                        <p>Simple tips and tricks to extend the life of your beautiful bouquets and keep them fresh for days.</p>
                        <a href="#" className={styles.readmore}>Read More</a>
                    </div>
                </div>
                
                <div className={styles.blogcard}>
                    <div className={styles.blogimg}></div>
                    <div className={styles.blogcontent}>
                        <h3>The Language of Flowers: What Your Bouquet Says</h3>
                        <p>Discover the hidden meanings behind different flowers and how to communicate through floral arrangements.</p>
                        <a href="#" className={styles.readmore}>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  Booking CTA */}
    <section id="booking" className={styles.bookingcta}>
        <div className={styles.container}>
            <h2>Ready to Brighten Someone's Day?</h2>
            <p>Book your floral arrangement for pickup today. Fresh, beautiful flowers are just a click away.</p>
            <a href="#" className={styles.btn}>Book Now</a>
        </div>
    </section>

    {/*  Footer */}
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.footercontent}>
                <div className={styles.footersection}>
                    <h3>FloralMeets</h3>
                    <p>Bringing nature's beauty to your doorstep with carefully crafted floral arrangements for every occasion.</p>
                </div>
                
                <div className={styles.footersection}>
                    <h3>Quick Links</h3>
                    <a href="#">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#store">Shop</a>
                    <a href="#booking">Booking</a>
                    <a href="#blog">Blog</a>
                </div>
                
                <div className={styles.footersection}>
                    <h3>Contact Us</h3>
                    <p>123 Flower Street, Bloomington</p>
                    <p>Email: info@floralmeets.com</p>
                    <p>Phone: (555) 1234567</p>
                </div>
                
                <div className={styles.footersection}>
                    <h3>Connect With Us</h3>
                    <div className={styles.sociallinks}>
                        <a href="#">FB</a>
                        <a href="#">IG</a>
                        <a href="#">TW</a>
                        <a href="#">PT</a>
                    </div>
                </div>
            </div>
            
            <div className={styles.footerbottom}>
                <p>&copy; 2023 FloralMeets. All rights reserved.</p>
            </div>
        </div>
    </footer>
</div>
    )
}