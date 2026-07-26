// Drawn from primitives rather than path data so the geometry is exact: a
// circle, the equator and one meridian. Stroked rather than filled, which is
// why the dark-mode rule for .personWebsite sets `stroke` where .personGithub
// sets `fill`.
const SvgWebsite: React.FC<JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>> = (props) => (
	<svg
		width={18}
		height={18}
		viewBox="0 0 18 18"
		fill="none"
		stroke="currentColor"
		strokeWidth={1.4}
		strokeLinecap="round"
		{...props}
	>
		<circle cx={9} cy={9} r={7} />
		<line x1={2} y1={9} x2={16} y2={9} />
		<ellipse cx={9} cy={9} rx={3.2} ry={7} />
	</svg>
)

export { SvgWebsite }
