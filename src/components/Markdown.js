import Vue from "vue"
export default Vue.component("markdown", {
  render: function(createElement) {
    let nodes = []
    if (this.$slots) {
      for (let each of this.$slots.default) {
        if (each.text) {
          nodes.push(
            createElement(
              "vue-simple-markdown", // tag name
              {
                props: { source: each.text },
                class: "markdown-container",
                style: {
                  width: "100%",
                },
              }
            )
          )
        } else if (each.tag != "br") {
          nodes.push(each)
        }
      }
      return createElement(
        "div",
        {
          style: {
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        },
        [
          createElement(
            "div",
            {
              style: {
                maxWidth: "80rem",
                width: "-webkit-fill-available",
                padding: "5rem calc(2rem + 5vw)",
                textAlign: "left",
              },
            },
            nodes
          ),
        ]
      )
    }
  },
})
