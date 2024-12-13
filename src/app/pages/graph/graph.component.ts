import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Mermaid } from 'mermaid';

declare const mermaid: Mermaid;

@Component({
  selector: 'app-graph',
  standalone: true,
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit, AfterViewInit {
  @Input() team!: string;
  @Input() graph!: string;

  mmd!: Mermaid;
  mermaidGraph = `
    graph TD
      A[Start] --> B{Is it sunny?}
      B -- Yes --> C[Go outside]
      B -- No --> D[Stay inside]
  `;

  constructor(@Inject(PLATFORM_ID) private platformId: never) {
    if (isPlatformBrowser(this.platformId)) {
      this.mmd = mermaid;
    }
  }

  ngOnInit(): void {
    console.log('team: ', this.team);
    console.log('graph: ', this.graph);

    if (isPlatformBrowser(this.platformId)) {
      this.mmd.initialize({
        startOnLoad: true,
        securityLevel: 'loose',
      });
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.renderMermaid();
      }, 0);
    }
  }

  async renderMermaid(): Promise<void> {
    const graphElement = document.querySelector('#mermaid-graph');

    if (graphElement) {
      const { svg } = await this.mmd.render(
        'mermaid-graph2',
        this.mermaidGraph
      );
      graphElement.innerHTML = svg;
    }
  }
}
