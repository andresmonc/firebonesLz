import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../../services/window.service";

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  private hidden: boolean = true;
  private audio
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }



  ngOnInit() {
    this.audio = this.document.getElementById("audio-file")
    console.log(this.audio)
  }



  stopAudio() {
    this.audio.pause();
  }


}
