// import { Component } from 'react';
// // import { musicPageData } from '../../lib/api';
// import Layout from '../../components/layout';
// import Music from '../../components/music-item';
//
// // <Layout>
// //
// //   <Album
// //     musicType={'album'}
// //     spotifyType={'ALBUM'}
// //     albumId={'2rZxoCObBFfJ42Evzlznxs'}
// //   />
// //
// // </Layout>
//
// export default function MusicPage({album}, {albumCover}) {
//     return(
//       <Layout>
//         <div className="music">
//           <div className="albums">
//             <div className="cover">
//               <div className="cover-child-image" style={{ background: `url(${ albumCover })`}}></div>
//               {console.log({album}, {albumCover})}
//               {/*<p>
//                 <Music album={album} service={'spotify'} serviceName={'Spotify'} />
//                 <Music album={album} service={'appleMusic'} serviceName={'Apple'} />
//                 <Music album={album} service={'amazonMusic'} serviceName={'Amazon'} />
//                 <Music album={album} service={'deezer'} serviceName={'Deezer'} />
//                 <Music album={album} service={'tidal'} serviceName={'Tidal'} />
//                 <Music album={album} service={'google'} serviceName={'Google'} />
//               </p>*/}
//             </div>
//           </div>
//         </div>
//       </Layout>
//     )
// }
//
// // export async function getStaticProps({ preview = false, previewData }) {
// //   const allPosts = await musicPageData(previewData)
// //   return {
// //     props: { preview, allPosts },
// //   }
// // }
// //
// // function Album({album, albumCover}){
// //
// //     return(
// //       <Layout>
// //         <div className="music">
// //           <div className="albums">
// //             <div className="cover">
// //               <div className="cover-child-image" style={{ background: `url(${ albumCover })`}}></div>
// //               {/*<p>
// //                 <Music album={album} service={'spotify'} serviceName={'Spotify'} />
// //                 <Music album={album} service={'appleMusic'} serviceName={'Apple'} />
// //                 <Music album={album} service={'amazonMusic'} serviceName={'Amazon'} />
// //                 <Music album={album} service={'deezer'} serviceName={'Deezer'} />
// //                 <Music album={album} service={'tidal'} serviceName={'Tidal'} />
// //                 <Music album={album} service={'google'} serviceName={'Google'} />
// //               </p>*/}
// //             </div>
// //           </div>
// //         </div>
// //       </Layout>
// //     )
// // }
//
// MusicPage.getInitialProps = async (ctx) => {
//
//   const MUSIC_TYPE = 'album'
//   const SPOTIFY_TYPE = 'ALBUM'
//   const ALBUM_ID = '2rZxoCObBFfJ42Evzlznxs'
//
//   const res = await fetch(`https://api.song.link/v1-alpha.1/links?url=spotify%3A${MUSIC_TYPE}%3A${ALBUM_ID}&userCountry=US&key=9ab8abaf-c5f1-4edb-8e7f-7f72c7033693`);
//   const json = await res.json()
//
//   return {
//     album: json.linksByPlatform,
//     albumCover: json.entitiesByUniqueId[`SPOTIFY_${SPOTIFY_TYPE}::${ALBUM_ID}`].thumbnailUrl
//   }
//
// }
