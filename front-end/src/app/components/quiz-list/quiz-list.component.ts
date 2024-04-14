import { Component, Output, EventEmitter } from '@angular/core';
import { QuizzesService } from '../../../services/quizzes.service';
import { Quiz, Side } from '../../../models/quiz.model';


@Component({
    selector: 'app-quiz-list',
    templateUrl: './quiz-list.component.html',
    styleUrls: ['./quiz-list.component.scss']
})



export class QuizListComponent {

    @Output() selectQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

    public quizList: Quiz[] = [];
    public searchValue: string = '';
    public selectedSide: Side = Side.UNDEFINED;
    public selectedQuiz: Quiz | undefined;


    constructor(public quizzesService: QuizzesService) {
        this.quizzesService.quizzes$.subscribe((quizList) => {
            this.quizList = quizList;
        });
    }


    ngOnInit() {
        this.quizzesService.resetQuizzes();
    }


    quizSelected(quiz: Quiz) {
        this.selectedQuiz = quiz;
        this.selectQuiz.emit(quiz);
    }


    public onSelect(event: any) {
        const selection = event.target.value;
        switch (selection) {
            case 'all':
                this.selectedSide = Side.UNDEFINED;
                break;
            case 'side_right':
                this.selectedSide = Side.RIGHT;
                break;
            case 'side_left':
                this.selectedSide = Side.LEFT;
                break;
            case 'side_both':
                this.selectedSide = Side.BOTH;
                break;
            default:
                break;
        }
        this.filterQuizzes(this.selectedSide, this.searchValue);
    }


    public onSearch(event: any) {
        this.searchValue = event.target.value;
        this.filterQuizzes(this.selectedSide, this.searchValue);
    }


    public filterQuizzes(side: Side, name: string) {
        this.quizzesService.filterQuizzes(side, name);
    }

}