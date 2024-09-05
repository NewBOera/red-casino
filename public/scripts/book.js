function goToBookingForm() {
  window.location.href = '#contact-section';
}

function bookEvent(event) {
  const eventsSelect = document.getElementById('event-select');
  console.log(eventsSelect);

  const events = eventsSelect.options;

  disabledEventSelected(events);
  for (let i = 0; i < events.length; i++) {
    if (events[i].value === event) {
      events[i].setAttribute('selected', 'selected');
      break;
    }
  }

  goToBookingForm();
}

function disabledEventSelected(events) {
  for (let i = 0; i < events.length; i++) {
    if (events[i].getAttribute('selected')) {
      events[i].removeAttribute('selected');
      return;
    }
  }
}
