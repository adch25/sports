import React from 'react'
import sponserLogo from '../assets/images/sponser.png'
import JBSportsLogo from '../assets/images/jb.png'

const Sponsors = () => {
  return (
    <>
      <div className="heading">
        <h1>Our Sponsors</h1>
      </div>

      <div className="section">
        <div className="sponsors-logo">
          <img src={sponserLogo} alt="" />
        </div>
        <div className="sponsors-para">    
          <p>PepsiCo is a global leader in the food and beverage industry, with a diverse portfolio of iconic brands that includes Pepsi, Mountain Dew, Lay's, Tropicana, Quaker, Gatorade, and more. With a presence in over 200 countries, PepsiCo is committed to delivering products that create more smiles with every sip and bite. The company has built a legacy of growth, innovation, and sustainability, with a focus on providing enjoyable and convenient choices for consumers around the world.</p>
          <p>PepsiCo is dedicated to sustainable business practices and social responsibility, striving to reduce its environmental footprint while improving the health and well-being of communities. They are actively involved in initiatives focused on water conservation, reducing carbon emissions, and promoting healthier lifestyles. PepsiCo’s commitment to social impact has earned them recognition for their leadership in sustainability.</p>
          <p>As a diversified company, PepsiCo not only produces beverages and snacks but also offers a range of nutritious products aimed at addressing consumer needs. The company continues to innovate, expanding its portfolio to meet changing preferences in the global marketplace.</p>
          <p>To learn more about PepsiCo and its products, visit their website at <a href='https://www.pepsico.com/' target="_blank" rel="noreferrer">www.pepsico.com</a> Stay connected through social media for the latest updates and innovations.</p>      
        </div>
        <div className="sponsors-logo">
          <img src={JBSportsLogo} alt="" />
        </div>
        <div className="sponsors-para">
          <p>JB Sports has been a valuable partner, providing us with high-quality sports equipment and gear that has helped make our event a success. Their dedication to providing excellent products and services to the community is evident in their commitment to supporting our event. We are proud to have JB Sports as a sponsor.
          </p>
        </div>
      </div>
    </>
  )
}

export default Sponsors

