import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-graph',
  imports: [],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css',
})
export class GraphComponent implements OnInit {
  @Input() team!: string;
  @Input() graph!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('team: ', this.team);
    console.log('diagram: ', this.graph);
  }
}
