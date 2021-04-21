// querySelector
const qs = selector => document.querySelector(selector)
// querySelectorAll
const qsa = selector => document.querySelectorAll(selector)
// createElement
const ce = element => document.createElement(element)
// appendChild
const ac = (parent, child) => parent.append(child);
// classList.add
const addClass = (element, className) => element.classList.add(className) 
// getClosest
const getClosest = (child, selector) => child.closest(selector)

