
import logo from './image/logo.png'
export default function JobSeekerHome() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <img src={logo} className='icon-size'></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li>Welcome User</li>
                        </ul>
                    </div>
                    <div className='d-flex'>
                    <img src={logo} className='icon-size'></img>
                    </div>
                </div>
            </nav>
        </>
    );
}