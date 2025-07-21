let Tourkit = function ({steps = [], seenVariableName = 'tour1_seen', tourParent = ''}) {
    this.currentStep = 0;
    this.steps = steps;
    this.seenVariableName = seenVariableName;
    this.tourParent = tourParent || $('body');
    
    this.endTour = function (permanent = true) {
        if (permanent) {
            localStorage.setItem(this.seenVariableName, 'true');
        }

        $('.tour-overlay',this.tourParent).fadeOut();
        $('.tour-tooltip',this.tourParent).fadeOut();
        $('.tour-highlight',this.tourParent).removeClass('tour-highlight');
    };

    this.showStep = function (index) {
        this.currentStep = index;

        const step = this.steps[index];
        const $element = $(step.element, this.tourParent);

        $('.tour-highlight', this.tourParent).removeClass('tour-highlight');
        $element.addClass('tour-highlight');

        const offset = $element.offset();
        const tooltip = $('.tour-tooltip', this.tourParent);
        const totalSteps = this.steps.length;

        const back = $('#lang_back').html() || $('#lang_back').val() || 'Back';
        const next = $('#lang_next').html() || $('#lang_next').val() || 'Next';
        const finish = $('#lang_finish').html() || $('#lang_finish').val() || 'Finish';
        const exit = $('#lang_exit').html() || $('#lang_exit').val() || 'Exit';
        
        const backward = index === 0?'' : ($('html').attr('dir') === 'rtl' ? 'forward' : 'backward');
        const forward = $('html').attr('dir') === 'rtl' ? 'backward' : 'forward';

        const nextButtonIcon = index === totalSteps - 1 ? 'danger' : 'primary';
        const of = $('#lang_of').html() || $('#lang_of').val() || 'Of';

        tooltip.html(`
        <div class="bg-dark bg-opacity-10 px-2 d-inline-block border border-dark border-opacity-10"><strong style="color: inherit;">${index + 1} ${of} ${totalSteps}</strong></div>
        <div class="mt-2">${step.text || $element.attr('data-title') || $element.attr('placeholder') || ''}</div>
        <div class="d-flex justify-content-between mt-3 gap-3">
        <button class="btn btn-sm btn-secondary prev-tour-step" ${index === 0 ? 'disabled' : ''}><span class="fa fa-${backward}" style="color: inherit;"></span> ${back}</button>
        <button class="btn btn-sm btn-${nextButtonIcon} next-tour-step"><span class="fa fa-${forward}" style="color: inherit;"></span> ${index === totalSteps - 1 ? finish : next}</button>
        ${index < totalSteps - 1?'<button class="btn btn-sm btn-danger end-tour"><span class="fa fa-times-circle" style="color: inherit;"></span> ' + exit + '</button>':''}
        </div>`);

        tooltip.css({
            top: offset.top + $element.outerHeight() + 10,
            left: offset.left,
            display: 'block'
        });

        $('.next-tour-step', this.tourParent).off('click').on('click', () => {
            if (index + 1 < totalSteps) {
                this.showStep(index + 1);
            } else {
                this.endTour();
            }
        });

        $('.prev-tour-step', this.tourParent).off('click').on('click', () => {
            if (index > 0) {
                this.showStep(index - 1);
            }
        });

        $('.end-tour', this.tourParent).off('click').on('click', () => {
            this.endTour(false);
        });
    };

    this.startTour = function () {
        const seen = localStorage.getItem(this.seenVariableName);
        if (seen) return;

        $('.tour-overlay', this.tourParent).fadeIn();
        
        this.showStep(this.currentStep);
    };

    steps = [];
}