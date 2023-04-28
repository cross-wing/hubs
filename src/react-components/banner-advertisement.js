import React, { Component } from "react";
import className from "classnames";
import styles from "../assets/stylesheets/banner-advertisement.scss";

export class BannerAdvertisementBox extends Component {
  render() {
    return (
      <div ref={ref => (this.root = ref)}>
        <a href='https://info.voice-doujin.space/vrbanner/link.php'>
          <img
            src="https://info.voice-doujin.space/vrbanner/banner.png"
            className={className(styles.bannerAdvertisementBox)}
            onError={() => (this.root.style.display = "none")}
          />
        </a>
      </div>
    );
  }
}