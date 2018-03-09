import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from './../journal.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [JournalService]
})
export class SingleEntryComponent implements OnInit {
  journal: any;

  constructor(
    private route: ActivatedRoute,
    private journalService: JournalService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getJournalEntry(params['id']);
    });
  }

  getJournalEntry(id) {
    this.journalService.get(id)
      .subscribe((journal) => {
        this.journal = journal;
      });
  }
}
