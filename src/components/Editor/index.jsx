import React, { Component } from "react";
import AceEditor from "react-ace";

class Editor extends Component {
  state = {
    newValue: ""
  };
  onChange = newValue => {
    console.log("change", newValue);
    this.setState({ newValue });
  };

  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="gruvbox"
        onChange={this.onChange}
        name="editor"
        editorProps={{ $blockScrolling: true }}
        height="100vh"
        width="100vw"
        highlightActiveLine={false}
        showPrintMargin={false}
        value={this.state.newValue}
        setOptions={{
          animatedScroll: true,
          enableMultiSelect: true,
          // fontSize: "15px",
          fixWidthGutter: true
        }}
      />
    );
  }
}

export { Editor };
