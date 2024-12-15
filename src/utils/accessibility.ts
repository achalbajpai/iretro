export function setAriaExpanded(element: HTMLElement, expanded: boolean) {
  element.setAttribute('aria-expanded', expanded.toString());
}

export function setAriaHidden(element: HTMLElement, hidden: boolean) {
  element.setAttribute('aria-hidden', hidden.toString());
}

export function setAriaLabel(element: HTMLElement, label: string) {
  element.setAttribute('aria-label', label);
}

export function setAriaLive(element: HTMLElement, live: 'off' | 'polite' | 'assertive') {
  element.setAttribute('aria-live', live);
}

export function setAriaSelected(element: HTMLElement, selected: boolean) {
  element.setAttribute('aria-selected', selected.toString());
}