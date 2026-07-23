import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule, ExternalLink, Github, Youtube, Twitter } from 'lucide-angular';
import { HlmToasterImports } from '@spartan-ng/helm/sonner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LucideAngularModule, ...HlmToasterImports],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('aldistron');
  readonly icons = { ExternalLink, Github, Youtube, Twitter };
}

