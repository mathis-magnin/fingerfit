import { Component, Output, EventEmitter } from '@angular/core';
import { QuizzesService } from '../../../services/quizzes.service';
import { OptionsService } from '../../../services/options.service';
import { Quiz, Side } from '../../../models/quiz.model';


@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})



export class QuizListComponent {

    @Output()
    closeSelection: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    exit: EventEmitter<boolean> = new EventEmitter<boolean>();
    
    public quizList: Quiz[] = [];
    public searchValue: string = '';
    public selectedHand: Side | undefined;

    constructor(public quizzesService: QuizzesService, public optionsService: OptionsService) {
        this.quizzesService.quizzes$.subscribe((quizList) => {
            this.quizList = quizList;
        });
    }

    quizSelected(Quiz: Quiz) {
        this.optionsService.selectQuiz(Quiz);
        this.closeSelection.emit(true);
        this.quizzesService.resetQuizzes();
    }

    exitQuizList() {
        this.exit.emit(true);
        this.quizzesService.resetQuizzes();
    }

    public onSelect(event: any) {
        const selection = event.target.value;
        switch (selection) {
            case 'all':
                this.selectedHand = undefined;
                break;
            case 'hand_right':
                this.selectedHand = Side.RIGHT;
                break;
            case 'hand_left':
                this.selectedHand = Side.LEFT;
                break;
            default:
                break;
        }
        this.filterQuizzes(this.selectedHand, this.searchValue);
    }

    public onSearch(event: any) {
        this.searchValue = event.target.value;
        this.filterQuizzes(this.selectedHand, this.searchValue);
    }

    public filterQuizzes(side: Side | undefined, name: string) {
        this.quizzesService.filterQuizzes(side, name);
    }

    
}