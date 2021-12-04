/// <reference types="cypress" />

describe('Drag & Drop', () => {
	describe('Using drag events', () => {
		beforeEach(() => {
			cy.viewport(1280, 720)
			cy.visit('/')
			cy.wait(250)
		})

		/**
		 * @param {string} fixture
		 */
		function dropFile(fixture) {
			cy.get('[data-cy="drag-and-drop"]').attachFile(fixture, {
				subjectType: 'drag-n-drop',
			})
			cy.wait(50)
		}

		it('Drop 310x310 PNG file', () => {
			dropFile('images/favicon-310x310.png')

			cy.get('[data-cy="preview-title"]').should('have.text', 'Good to go!')
			cy.get('[data-cy="preview-square-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-png-svg-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-310px-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-pwa-compatible"]').should('have.attr', 'disabled')
		})

		it('Drop 640x640 PNG file', () => {
			dropFile('images/favicon-640x640.png')

			cy.get('[data-cy="preview-title"]').should('have.text', 'Good to go!')
			cy.get('[data-cy="preview-square-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-png-svg-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-310px-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-pwa-compatible"]').should('not.have.attr', 'disabled')
		})

		it('Drop 160x160 SVG file', () => {
			dropFile('images/favicon.svg')

			cy.get('[data-cy="preview-title"]').should('have.text', 'Good to go!')
			cy.get('[data-cy="preview-square-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-png-svg-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-310px-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-pwa-compatible"]').should('not.have.attr', 'disabled')
		})

		it('Drop 150x150 PNG file', () => {
			dropFile('images/favicon-150x150.png')

			cy.get('[data-cy="preview-title"]').should('have.text', 'Your image should be higher than 310px')
			cy.get('[data-cy="preview-square-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-png-svg-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-310px-image"] svg path').should('have.class', 'svgError')
			cy.get('[data-cy="preview-pwa-compatible"]').should('have.attr', 'disabled')
		})

		it('Drop 160x160 JPG file', () => {
			dropFile('images/favicon-160x160.jpg')

			cy.get('[data-cy="preview-title"]').should('have.text', 'Your image has a few problems')
			cy.get('[data-cy="preview-square-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-png-svg-image"] svg path').should('have.class', 'svgError')
			cy.get('[data-cy="preview-310px-image"] svg path').should('have.class', 'svgError')
			cy.get('[data-cy="preview-pwa-compatible"]').should('have.attr', 'disabled')
		})

		it('Drop 320x320 JPG file', () => {
			dropFile('images/favicon-320x320.jpg')

			cy.get('[data-cy="preview-title"]').should('have.text', 'Your image should be in PNG or SVG')
			cy.get('[data-cy="preview-square-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-png-svg-image"] svg path').should('have.class', 'svgError')
			cy.get('[data-cy="preview-310px-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-pwa-compatible"]').should('have.attr', 'disabled')
		})

		it('Drop 360x320 PNG file', () => {
			dropFile('images/favicon-360x320.png')

			cy.get('[data-cy="preview-title"]').should('have.text', 'Your image should be squared')
			cy.get('[data-cy="preview-square-image"] svg path').should('have.class', 'svgError')
			cy.get('[data-cy="preview-png-svg-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-310px-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-pwa-compatible"]').should('have.attr', 'disabled')
		})

		it('Drop 360x320 JPG file', () => {
			dropFile('images/favicon-360x320.jpg')

			cy.get('[data-cy="preview-title"]').should('have.text', 'Your image has a few problems')
			cy.get('[data-cy="preview-square-image"] svg path').should('have.class', 'svgError')
			cy.get('[data-cy="preview-png-svg-image"] svg path').should('have.class', 'svgError')
			cy.get('[data-cy="preview-310px-image"] svg path').should('have.class', 'svgCheck')
			cy.get('[data-cy="preview-pwa-compatible"]').should('have.attr', 'disabled')
		})
	})
})
