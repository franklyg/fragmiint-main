import { Component } from 'react';
import { musicPageData } from '../../lib/api';
import Layout from '../../components/layout';
import Music from '../../components/music-item'

// {/*<p>
//   <Music album={album} service={'spotify'} serviceName={'Spotify'} />
//   <Music album={album} service={'appleMusic'} serviceName={'Apple'} />
//   <Music album={album} service={'amazonMusic'} serviceName={'Amazon'} />
//   <Music album={album} service={'deezer'} serviceName={'Deezer'} />
//   <Music album={album} service={'tidal'} serviceName={'Tidal'} />
//   <Music album={album} service={'google'} serviceName={'Google'} />
// </p>*/}

export default function MusicPage({ allPosts, album, albumCover, api }) {
    const albumPost = allPosts.slice(0)
    return(
      <>
      <Layout>
        <div className="music z-10 relative">
          {
            albumPost.length > 0 && <Album posts={albumPost} album={album} albumCover={albumCover} api={api}  />
          }
        </div>
      </Layout>
      </>
    )
}

function Album({ posts, album, albumCover, api }){
    return(
      <div className="albums">
        {

          api.map(list  =>
            list.fullList.map((full, i) =>
              <div className="cover" key={list.albumId[i]}>
                <div className="cover-child-image" style={{ background: `url(${ full.entitiesByUniqueId[`SPOTIFY_${list.spotifyType[i]}::${list.albumId[i]}`].thumbnailUrl })`}}></div>
                <div className="links">
                  <p>
                    <Music album={full.linksByPlatform} service={'spotify'} serviceName={'Spotify'} />
                    <Music album={full.linksByPlatform} service={'appleMusic'} serviceName={'Apple'} />
                    <Music album={full.linksByPlatform} service={'amazonMusic'} serviceName={'Amazon'} />
                    <Music album={full.linksByPlatform} service={'deezer'} serviceName={'Deezer'} />
                    <Music album={full.linksByPlatform} service={'tidal'} serviceName={'Tidal'} />
                    <Music album={full.linksByPlatform} service={'google'} serviceName={'Google'} />
                  </p>
                </div>
              </div>
            )
          )
        }
      </div>
    )
}

export async function getStaticProps({ preview = false, previewData }, ctx) {

  const allPosts = await musicPageData(previewData)

  let MUSIC_TYPE = []
  let SPOTIFY_TYPE = []
  let ALBUM_ID = []
  let res = []
  let json = []

  let api = []
  let spotifyType = []
  let albumId = []

  let fullList = []

  // const api = []
  // let api_song_info = []

  let cover = []

  let albumCover = []

  for(const post of allPosts){
    for(const album of post.node.body){
      for(const item of album.fields){

          MUSIC_TYPE = item.music_track_type[0].text
          SPOTIFY_TYPE = item.song_listing_type[0].text
          ALBUM_ID = item.track_spotify_id[0].text

          res = await fetch(`https://api.song.link/v1-alpha.1/links?url=spotify%3A${[MUSIC_TYPE]}%3A${[ALBUM_ID]}&userCountry=US&key=9ab8abaf-c5f1-4edb-8e7f-7f72c7033693`)
          json = await res.json()

          // cover = json.entitiesByUniqueId[`SPOTIFY_${[SPOTIFY_TYPE]}::${[ALBUM_ID]}`].thumbnailUrl


          fullList.push(json)
          spotifyType.push(SPOTIFY_TYPE)
          albumId.push(ALBUM_ID)

      }
    }
  }

  api.push({fullList, spotifyType, albumId})

  // cover.map(c => console.log(c))

  // a.entitiesByUniqueId[`SPOTIFY_${[SPOTIFY_TYPE]}::${[ALBUM_ID]}`].thumbnailUrl

  // API_LINK = `https://api.song.link/v1-alpha.1/links?url=spotify%3A${MUSIC_TYPE}%3A${ALBUM_ID}&userCountry=US&key=9ab8abaf-c5f1-4edb-8e7f-7f72c7033693`

  // res = await fetch(`https://api.song.link/v1-alpha.1/links?url=spotify%3A${MUSIC_TYPE}%3A${ALBUM_ID}&userCountry=US&key=9ab8abaf-c5f1-4edb-8e7f-7f72c7033693`);

  return {
    props: {
      preview,
      allPosts,
      api
    },
  }
}
