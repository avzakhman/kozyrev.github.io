//initialize elements
const   Ver1Inputs          = document.querySelectorAll('.v-1'),
        Ver2Inputs          = document.querySelectorAll('.v-2'),
        Ver3Inputs          = document.querySelectorAll('.v-3'),
        Ver4Inputs          = document.querySelectorAll('.v-4'),
        Ver5Inputs          = document.querySelectorAll('.v-5'),
        Ver6Inputs          = document.querySelectorAll('.v-6'),
        Ver7Inputs          = document.querySelectorAll('.v-7'),
        Ver8Inputs          = document.querySelectorAll('.v-8'),
        Ver9Inputs          = document.querySelectorAll('.v-9'),
        Ver10Inputs         = document.querySelectorAll('.v-10'),

        Hor1Inputs          = document.querySelectorAll('.h-1'),
        Hor2Inputs          = document.querySelectorAll('.h-2'),
        Hor3Inputs          = document.querySelectorAll('.h-3'),
        Hor4Inputs          = document.querySelectorAll('.h-4'),
        Hor5Inputs          = document.querySelectorAll('.h-5'),
        Hor6Inputs          = document.querySelectorAll('.h-6'),
        Hor7Inputs          = document.querySelectorAll('.h-7'),
        Hor8Inputs          = document.querySelectorAll('.h-8'),
        Hor9Inputs          = document.querySelectorAll('.h-9'),
        Hor10Inputs          = document.querySelectorAll('.h-10'),
        Hor11Inputs          = document.querySelectorAll('.h-11'),



        HorizontalOptions   = document.querySelectorAll('.horizontal'),
        VerticalOptions     = document.querySelectorAll('.vertical'),
        HorizontalAnswers   = ['колумбия', 'перу', 'бразилиа', 'бразильское', 'гвианское', 'атакама', 'амазонская', 'игуасу'],
        VerticalAnswers     = ['маракайбо', 'титикака', 'кабубранку', 'фроуорд', 'анхель', 'пампа', 'амазонка'];


//sort inputs by line
ReadInputs = function(inputs, number, axis) {
    --number;
    inputs.forEach((input)=> {
        input.addEventListener('input', ()=> {
            let letters = [];
            let word = '';
            inputs.forEach((letter)=> {
                letters.push(...letter.value);
            });
            letters.forEach((element)=> {
                word = word + element;
            });
            CheckList(word, number, axis);
        });
    })
}

//check whether right/false
CheckList = function(word, number, axis) {
    if (axis == 'v') {
        console.log('stage 1');
        VerticalAnswers.forEach((answer, id)=> {
            if (id == (number)) {
                console.log('stage 2');
                if (answer == word) {
                    console.log('stage 3');
                    VerticalOptions.forEach((option ,OptId)=> {
                        if (number == OptId) {
                            option.classList.add('crossword-contents__active');
                        }
                    });
                } else {
                    VerticalOptions.forEach((option ,OptId)=> {
                        if (number == OptId) {
                            option.classList.remove('crossword-contents__active');
                        }
                    });
                }
            } 
        });
    } else {
        HorizontalAnswers.forEach((answer, id)=> {
            if (id == number) {
                if (answer == word) {
                    HorizontalOptions.forEach((option,OptId)=> {
                        if (OptId == id) {
                            option.classList.add('crossword-contents__active');
                        }
                    });
                } else {
                    HorizontalOptions.forEach((option,OptId)=> {
                        if (OptId == id) {
                            option.classList.remove('crossword-contents__active');
                        }
                    });
                }
            } 
        });
    }
}

ReadInputs(Ver1Inputs, 1, 'v');
ReadInputs(Ver2Inputs, 2, 'v');
ReadInputs(Ver3Inputs, 3, 'v');
ReadInputs(Ver4Inputs, 4, 'v');
ReadInputs(Ver5Inputs, 5, 'v');
ReadInputs(Ver6Inputs, 6, 'v');
ReadInputs(Ver7Inputs, 7, 'v');
ReadInputs(Ver8Inputs, 8, 'v');
ReadInputs(Ver9Inputs, 9, 'v');
ReadInputs(Ver10Inputs, 10, 'v');

ReadInputs(Hor1Inputs, 1, 'h');
ReadInputs(Hor2Inputs, 2, 'h');
ReadInputs(Hor3Inputs, 3, 'h');
ReadInputs(Hor4Inputs, 4, 'h');
ReadInputs(Hor5Inputs, 5, 'h');
ReadInputs(Hor6Inputs, 6, 'h');
ReadInputs(Hor7Inputs, 7, 'h');
ReadInputs(Hor8Inputs, 8, 'h');
ReadInputs(Hor9Inputs, 9, 'h');
ReadInputs(Hor10Inputs, 10, 'h');
ReadInputs(Hor11Inputs, 11, 'h');


