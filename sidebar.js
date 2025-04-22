{/*Sidebar*/}
  {/*Phone*/}
  <div className="phone-holder">
    <div className="phone">
      <div className="status-bar">
        <div className="status-icon">
          <img
            className="status-icon-image"
            src="images/icons/cellular_status.svg"
          />
        </div>
        <div className="time">Loading...</div>
        <div className="status-icon">
          <img
            className="status-icon-image"
            src="images/icons/location_status.svg"
          />
        </div>
      </div>
      <div className="title">Trans in Japan</div>
      {/*Pages*/}
      <div className="app-grid">
        <div
          id="diy"
          className="app-icon"
          style={{ backgroundColor: "#E99B6F" }}
        >
          <img className="app-icon-image" src="images/icons/resources.svg" />
        </div>
        <div
          id="design"
          className="app-icon"
          style={{ backgroundColor: "#FFACBE" }}
        >
          <img className="app-icon-image" src="images/icons/progress.svg" />
        </div>
        <div
          id="passport"
          className="app-icon"
          style={{ backgroundColor: "#95CC95" }}
        >
          <img className="app-icon-image" src="images/icons/about.svg" />
        </div>
        {/*Social*/}
        <div
          id="camera"
          className="app-icon"
          style={{ backgroundColor: "#B380DC" }}
        >
          <a href="https://www.instagram.com/zapthecactus" target="_blank">
            <img className="app-icon-image" src="images/icons/instagram.svg" />
          </a>
        </div>
        <div
          id="youtube"
          className="app-icon"
          style={{ backgroundColor: "#FF7C65" }}
        >
          <a href="https://www.youtube.com/@TransinJapan" target="_blank">
            <img
              className="app-icon-image"
              src="images/icons/YouTube.svg"
              alt="YouTube"
            />
          </a>
        </div>
        <div
          id="spotify"
          className="app-icon"
          style={{ backgroundColor: "#1E7860" }}
        >
          <a href="https://open.spotify.com/show/4iF64iXFLTUQddu6fq1wfs?si=dZWJj6VgS-qoiy40t8gUIg"
            target="_blank">
            <img
              className="app-icon-image"
              src="images/icons/spotify.svg"
              alt="Spotify"
            />
          </a>
        </div>
        <div
          id="chat"
          className="app-icon"
          style={{ backgroundColor: "#CDD75D" }}
        >
          <img className="app-icon-image" src="/images/icons/contact.svg" />
        </div>
      </div>
      <div className="copyright">
        © <span id="spanYear" /> Fae
      </div>
    </div>
  </div>
  {/* Get current year for copyright statement */}
  {/*END Sidebar*/}
