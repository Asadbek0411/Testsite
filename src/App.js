import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>


      <div className="container">
        <div className="navbar">
          <h3>K. Griffith</h3>
           <div className="nav">
               <a href="#">APPEARANCE</a>
               <a href="#">BOOKS</a>
               <a href="#">NEWS</a>
               <a href="#">ABOUT</a>
               <a href="#">CONTACT</a>
           </div>
        </div>

        <section className="home">

            <div className="img">
                <img src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_262,h_289,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg" alt=""/>
            </div>

            <div className="hometext">
                <h3>Kayla Griffith</h3>
                <p>Award Winning Author</p>
                <p>Skip me Please to next lesson!</p>
            </div>

        </section>

         <section className="about">

             <div className="main-about">

                 <div className="words">
                     <h3>The Swan Isle
                        <br/> (2023)</h3>

                     <br/>
                     <p>I'm a paragraph. Click here to add your own text and edit me.
                         It’s easy. Just click “Edit Text” or double click me to add your own content
                         and make changes to the font.
                         I’m a great place for you to tell a story and let your users know a little more about you.</p>

                     <h5>Order Now</h5>

                     <div className="btn">
                         <button type={"submit"}>Amazon</button>
                         <button type={"submit"}>Google</button>
                         <button type={"submit"}>ibook</button>
                     </div>
                 </div>
                 <div className="img">
                     <img src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_385,h_543,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png" alt=""/>
                 </div>
             </div>
         </section>


      </div>



    </div>
  );
}

export default App;
