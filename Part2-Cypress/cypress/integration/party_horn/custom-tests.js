describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('volume number to slider test', () => {
    cy.get("#volume-number").clear().type('75')
    cy.get("#volume-slider").then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('volume slider to number test', () => {
    cy.get("#volume-slider").invoke('val', 33).trigger('input');
    cy.get("#volume-number").then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('volume slider to audio test', () => {
    cy.get("#volume-slider").invoke('val', 33).trigger('input');
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('change image test test', () => {
    cy.get("#radio-car-horn").click();
    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/car.svg');
    });
  });

  it('volume image change 3 test', () => {
    cy.get("#volume-slider").invoke('val', 100).trigger('input');
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });

  it('volume image change 2 test', () => {
    cy.get("#volume-slider").invoke('val', 52).trigger('input');
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });

  it('volume image change 1 test', () => {
    cy.get("#volume-slider").invoke('val', 9).trigger('input');
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });

  it('volume image change 0 test', () => {
    cy.get("#volume-slider").invoke('val', 0).trigger('input');
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });

  it('bad volume input test', () => {
    cy.get("#volume-number").clear().type('a')
    cy.get("#honk-btn").then(($el) => {
      expect($el).to.have.attr('disabled', 'disabled');
    });
  });

  it('negative volume input test', () => {
    cy.get("#volume-number").clear().type(-1)
    cy.get('input:invalid').should('have.length', 1)
  });
});
