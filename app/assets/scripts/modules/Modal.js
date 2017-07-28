import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    // clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    // clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;





//Fred replaced below with Brad's file after getting stuck on chapter 50. The buttons would not open the modal.
/*import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events(); // Fred start listening for event on page load
    }
    
    events() {
        // Freds note clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this));
        
        // clicking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        
        // pushes the escape key
    
    openModal() {
        this.modal.addClass("modal--is-visable");
        return false;
    }
    
    closeModal() {
        this.modal.removeClass("modal--is-visable");
        
    }
}

export default Modal;*/