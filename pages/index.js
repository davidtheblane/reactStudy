import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estiloDaHomePage = {
    // backgroundColor: "red" 
  }
  // console.log(config.playlists)

  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // backgroundColor: "red",
      }}>
        <Menu />
        <Header imgs={config.imgs} />
        <Timeline playlists={config.playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  )
}

export default HomePage

// function Menu() {
//   return (
//     <div>Menu</div>
//   )
// }

const StyledHeader = styled.div`
  .banner-img {
    width: 100%;
    height: 230px;
    left: 0px;
    top: 56px;
    object-fit: cover;
  }

  .banner {
        display: flex;
      align-items: center;
      width: 100%;
  }

  .profile {
    width: 80px;
  height: 80px;
  border-radius: 50%;
}
      .user-info {
        display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 16px;
  }
      `;
function Header(props) {
  const bannerImg = props.imgs.home[0].bannerImg
  const profileImg = props.imgs.home[1].profile
  return (
    <StyledHeader>
      <section className="banner">
        < img className="banner-img" src={bannerImg} />
      </section>
      <section className="user-info">
        <img className="profile" src={profileImg} />
        <div>
          <h2>
            {config.name}
          </h2>
          <h5>
            {config.job}
          </h5>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline(props) {
  // console.log("dentro do componente", props)
  const playlistNames = Object.keys(props.playlists)
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        // console.log(playlistName)
        // console.log(videos)
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
