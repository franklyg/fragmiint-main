import React, { Component } from 'react';
import Link from 'next/link'



export default class MusicItem extends Component {

  render(props){
    const { album, service, serviceName } = this.props
    return(
      <>
        <Link href={album[service].url}>
          <a>{serviceName}</a>
        </Link>
      </>

    )
  }

}
