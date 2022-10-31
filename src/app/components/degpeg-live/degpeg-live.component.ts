import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';

declare global {
  function ggetDegPegLiveTvLiveSessions(): Promise<any>;
}

@Component({
  selector: 'app-degpeg-live',
  templateUrl: './degpeg-live.component.html',
  styleUrls: ['./degpeg-live.component.css']
})
export class DegpegLiveComponent implements AfterViewInit {
  window: any & Window;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
  }

  ngAfterViewInit(): void {
    this.window.degPegConfig = {
      contentProvideId: '632a9b98cc4f9f244ff8e24c',
      publicKey: 'mtduV6B6WmnnkefI',
      appId: 'degpegarjun_CmGG9Xmc',
      template: 'livetv', // option to show only livetv
      videoInformation: false, // player bottom title and description hidden
      userName: '', // chat user name
      // layout: "slider", // past video -> slider or normal
      // titleHeading: false, // past and upcoming video heading
    };
  
    const script: HTMLScriptElement = this.document.createElement('script');
    script.src = 'https://www.cdn.degpeg.com/sdks/web/live-tv/v1/degpeg-live-tv.js';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    this.document.head.appendChild(script);
  }
}
