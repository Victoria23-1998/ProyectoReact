import img from '../../img/921i (1).gif';
import { Link } from 'react-router-dom';
import '../home/home.css'
export const Home =()=>{
    return(
     <main>
       
            <div className="contentVideo">
                <img src={img} alt="" />
            </div > 
            <div className='content-home'>
                <h3>¿A DONDE QUIERES IR?</h3>
                <div className="conteImg1">
                    <Link to="/categoria/montaña">
                        <div className="img1">
                            <div className="efecto"></div>

                        </div>
                    </Link>
                    <Link to="/categoria/playa">
                        <div className="img2">
                            <div className="efecto2"></div>
                        </div>
                    </Link>
                </div>

                <div className="conteImg2">
                    <Link to="/categoria/selva">
                        <div className="img3">
                            <div className="efecto3"></div>
                        </div>
                    </Link>
                    <Link to="/categoria/llano">
                        <div className="img4">
                            <div className="efecto4"></div>
                        </div>
                    </Link>

                </div>
            </div>
     </main>
    )
}