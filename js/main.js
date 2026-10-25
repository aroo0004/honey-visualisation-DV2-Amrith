// Embeds every Vega / Vega-Lite specification into the page.
// The specs live as human-readable JSON in /specs; a shared theme is applied here.

const theme = {
  background: null,
  font: "Source Sans 3, Segoe UI, sans-serif",
  padding: 4,
  title: { font: "Source Sans 3, sans-serif", fontSize: 15, fontWeight: 700, color: "#2b2118", anchor: "start", offset: 12 },
  axis: {
    labelFont: "Source Sans 3, sans-serif", titleFont: "Source Sans 3, sans-serif",
    labelColor: "#4a3b2c", titleColor: "#4a3b2c", labelFontSize: 12, titleFontSize: 12,
    titleFontWeight: 600, domainColor: "#cdbb9b", tickColor: "#cdbb9b", gridColor: "#efe6d6"
  },
  legend: {
    labelFont: "Source Sans 3, sans-serif", titleFont: "Source Sans 3, sans-serif",
    labelColor: "#4a3b2c", titleColor: "#2b2118", labelFontSize: 12, titleFontSize: 12, titleFontWeight: 600
  },
  header: { labelFont: "Source Sans 3, sans-serif" },
  text: { font: "Source Sans 3, sans-serif" },
  view: { stroke: null }
};

const charts = [
  ["#c01", "specs/c01_states.vl.json"],
  ["#c03", "specs/c03_waffle.vl.json"],
  ["#c04", "specs/c04_production.vl.json"],
  ["#c05", "specs/c05_price_volume.vl.json"],
  ["#c06", "specs/c06_public_land.vl.json"],
  ["#c07", "specs/c07_imports_exports.vl.json"],
  ["#c08", "specs/c08_export_flows.vl.json"],
  ["#c09", "specs/c09_export_heatmap.vl.json"],
  ["#c10", "specs/c10_marimekko.vl.json"],
  ["#c11", "specs/c11_pollination_treemap.vg.json"],
  ["#c12", "specs/c12_hive_demand.vl.json"],
  ["#c13", "specs/c13_varroa_spread.vl.json"]
];

charts.forEach(([el, spec]) => {
  vegaEmbed(el, spec, { actions: false, config: theme, renderer: "svg" })
    .catch(err => {
      console.error(spec, err);
      document.querySelector(el).innerHTML =
        `<p style="color:#b3261e">This chart could not load (${spec}). Please refresh the page.</p>`;
    });
});
