import { Component, Output, EventEmitter, Input } from '@angular/core';
import { PositionsService } from '../../../services/positions.service';
import { Position, Quiz, Side } from '../../../models/quiz.model';
import { PositionListStyle } from 'src/models/style-input.model';


@Component({
    selector: 'app-position-list',
    templateUrl: './position-list.component.html',
    styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent {

    @Input() positionListStyle: PositionListStyle = { height: "50vh" }

    @Output() selectPosition: EventEmitter<Position> = new EventEmitter<Position>();

    public positionList: Position[] = [];

    public searchValue: string = '';
    public selectedSide: Side = Side.UNDEFINED;
    public selectedPosition: Position | undefined;

    constructor(public positionsService: PositionsService) {
        this.positionsService.positions$.subscribe((positionList) => {
            this.positionList = positionList;
        });
    }


    ngOnInit() {
        this.positionsService.resetQuizzes();
    }


    quizSelected(position: Position) {
        this.selectedPosition = position;
        this.selectPosition.emit(position);
    }


    public onSelect(s: Side) {
        this.selectedSide = s;
        this.filterQuizzes(this.selectedSide, this.searchValue);
    }


    public onSearch(event: any) {
        this.searchValue = event.target.value;
        this.filterQuizzes(this.selectedSide, this.searchValue);
    }


    public filterQuizzes(side: Side, name: string) {
        this.positionsService.filterQuizzes(side, name);
    }

}