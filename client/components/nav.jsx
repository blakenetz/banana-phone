import React, { Component } from 'react';
import debounce from 'javascript-debounce';

export default class Nav extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleScroll = debounce(this.handleScroll.bind(this), 0)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e){
    const nav = document.querySelector('nav')
    if (window.pageYOffset > 200) {
      nav.classList.remove("is-hidden");
    }
    else{
      nav.classList.add("is-hidden");
    }
  }

  handleClick(e){
    const twText = encodeURI("Yellow!? Banana Phones are taking over. Get a phone with appeal at bananaphone.io 🍌")
    const twHashtags = encodeURI("phonewithappeal,yellow?,gorillamarketing")
    const fbUrl = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Figg.me%2Fat%2Fbananaphone&amp;src=sdkpreparse"
    const twUrl = `https://twitter.com/intent/tweet?text=${twText}&hashtags=${twHashtags}`;
    let url;
    if (e.currentTarget.id === 'fb') url = fbUrl
    else url = twUrl
    window.open(
      url,
      '_blank',
      'location=yes,height=570,width=520,scrollbars=yes,status=yes'
    );
  }

  mobilecheck(a) {
    let check = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
      check = true;
    return check;
  };

  render(){
    const isMobile = this.mobilecheck(navigator.userAgent||navigator.vendor||window.opera)
    return (
      <nav className="is-hidden">
        <section>
          <img src="images/logo.png" alt="Banana Phone logo" />
          <h3>Talk More. Smile More. Save Gorillas</h3>
        </section>

        <section id="social-media">
          <figure>
            <a className="fb-xfbml-parse-ignore"
              id="fb"
              onClick={this.handleClick}
              href={isMobile ? 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Figg.me%2Fat%2Fbananaphone&amp;src=sdkpreparse' : 'javascript:void(0)'}
              target={isMobile ? '_blank' : '_self'}>

              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="45" height="45" viewBox="0 0 67 67" enableBackground="new 0 0 67 67">
                <path fill="#000000" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" d="M29.765,50.32h6.744V33.998h4.499l0.596-5.624
                  h-5.095l0.007-2.816c0-1.466,0.141-2.253,2.244-2.253h2.812V17.68h-4.5c-5.405,0-7.307,2.729-7.307,7.317v3.377h-3.369v5.625h3.369
                  V50.32z M34,64C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4c16.568,0,30,13.431,30,30C64,50.568,50.568,64,34,64z"/>
              </svg>
            </a>
            <figcaption>Share</figcaption>
          </figure>

          <figure>
            <a className="twitter-share-button"
                onClick={this.handleClick}
                id="tw"
                href={isMobile ? 'https://twitter.com/intent/tweet?text=Yellow!&hashtags=#phonewithappeal,yellow,gorillamarketing' : 'javascript:void(0)'}
                target={isMobile ? '_blank' : '_self'}  >
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="45" height="45" viewBox="0 0 67 67" enableBackground="new 0 0 67 67">
                <path fill="#000000" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" d="M38.167,22.283
                  c-2.619,0.953-4.274,3.411-4.086,6.101l0.063,1.038l-1.048-0.127c-3.813-0.487-7.145-2.139-9.974-4.915l-1.383-1.377l-0.356,1.017
                  c-0.754,2.267-0.272,4.661,1.299,6.271c0.838,0.89,0.649,1.017-0.796,0.487c-0.503-0.169-0.943-0.296-0.985-0.233
                  c-0.146,0.149,0.356,2.076,0.754,2.839c0.545,1.06,1.655,2.097,2.871,2.712l1.027,0.487l-1.215,0.021
                  c-1.173,0-1.215,0.021-1.089,0.467c0.419,1.378,2.074,2.84,3.918,3.476l1.299,0.444l-1.131,0.678
                  c-1.676,0.977-3.646,1.525-5.616,1.566C20.775,43.256,20,43.341,20,43.404c0,0.212,2.557,1.397,4.044,1.865
                  c4.463,1.377,9.765,0.782,13.746-1.568c2.829-1.674,5.657-5,6.978-8.221c0.713-1.715,1.426-4.852,1.426-6.354
                  c0-0.975,0.062-1.102,1.236-2.267c0.691-0.678,1.34-1.419,1.467-1.631c0.209-0.403,0.188-0.403-0.881-0.043
                  c-1.781,0.636-2.033,0.551-1.152-0.402c0.65-0.678,1.426-1.907,1.426-2.267c0-0.063-0.314,0.042-0.671,0.233
                  c-0.377,0.212-1.216,0.53-1.845,0.72l-1.131,0.361l-1.026-0.7c-0.566-0.381-1.361-0.805-1.781-0.932
                  C40.766,21.902,39.131,21.944,38.167,22.283z M34,64C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4c16.568,0,30,13.431,30,30
                  C64,50.568,50.568,64,34,64z"/>
              </svg>
            </a>
            <figcaption>Tweet</figcaption>
          </figure>

          <figure>
            <a href="https://igg.me/at/bananaphone" target="_blank">
              <i className="fa fa-shopping-cart fa-3x" aria-hidden="true"></i>
            </a>
            <figcaption>Order now!</figcaption>
          </figure>
        </section>
      </nav>
    )
  }
}
