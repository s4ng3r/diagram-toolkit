import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { IMmdConfig, MMD_CONFIG } from '@config/mmd.config';
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

  mmdConfig: IMmdConfig = MMD_CONFIG;

  mmd!: Mermaid;
  mermaidGraph = `
    graph LR
      A(..icon..My Database) --> B{Is it sunny?}
      E[(..icon..\nDatabase)]
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
        theme: 'base',
        flowchart: {
          wrappingWidth: 100000,
        },
        themeVariables: {
          fontFamily: 'Inter',
        },
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

    /* const { icon } = this.mmdConfig.nodes['-mysql-2'] || null;
    if (icon)
    console.log(icon); */
    const icon = this.mmdConfig.icons.database['-mysql-'] ?? null;
    console.log(icon);

    /* for (const category of Object.values(this.mmdConfig)) {
      const { icon } = category.find((f: IMmdConfigDetail) => f.node == '-mysql-') || {
        icon: null,
      };
      if (icon) {
        console.log(icon);
      }
    } */

    if (graphElement) {
      try {
        const { svg } = await this.mmd.render('mermaid-graph2', this.mermaidGraph);
        const svgEl = this.parseSvgDom(svg);

        const nodes = svgEl.querySelector('.root .nodes');
        nodes?.classList.add('mmd-node');

        const icon = document.createElement('i');
        icon.className = 'text-xl mr-md icon-[devicon--postgresql]';

        const label = nodes?.querySelector('#flowchart-A-0 span p');
        if (label && label.textContent) {
          label.classList.add('flex');
          label.innerHTML = label.innerHTML.replace('..icon..', '');
        }
        label?.insertBefore(icon, label.firstChild);

        graphElement.appendChild(svgEl);
      } catch (err) {
        console.log(err);
        const mmdErr = document.querySelector('#mermaid-graph2') as HTMLElement;
        mmdErr.style.display = 'none';
      }
    }
  }

  private parseSvgDom(svg: string) {
    const svgDoc = new DOMParser().parseFromString(svg, 'image/svg+xml');
    return svgDoc.documentElement as unknown as SVGSVGElement;
  }
}
