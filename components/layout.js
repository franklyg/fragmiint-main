import Alert from '../components/alert'
import Meta from '../components/meta'
import Navigation from './navigation'

import ReactGA from 'react-ga';
const trackingId = "UA-177158230-1";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Navigation />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <video className="video" src={require('../public/IMG_0612.mp4')} autoPlay loop/>
    </>
  )
}
