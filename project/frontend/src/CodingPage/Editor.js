import React from 'react';
import ReactAce from 'react-ace-editor';

class Editor extends React.Component {
  constructor(props) {
    super(props)
      
  }

  shouldComponentUpdate(nextProps) {
      
      if(this.props.method === null) {
        return true;
      }
    
        if (nextProps.questionField === this.props.questionField) {
          //console.log('Dont Update\nNextprops-> ', nextProps.questionField, '\nThisprops-> ', this.props.questionField)
          return false;
        }

        return true;
  }


  componentDidUpdate() {
    if(this.props.method === null) {
      return;
    }
    
    const editor = this.ace
    editor.editor.setValue(this.props.questionField)
    
  }


  onChange = () => {
    //console.log(newValue, e);

    const editor = this.ace.editor; // The editor object is from Ace's API
    //console.log(editor.getValue()); // Outputs the value of the editor
    const value = editor.getValue()
    this.props.onChangeEditor(value)
  }

  componentDidMount() {
    //console.log('Editor  Did mount')
    
  }

  render() {
    //console.log('Editor Inside render')
    return (
      <ReactAce
        mode="c_cpp"
        theme="twilight"
        onChange={this.onChange}
        value='type here'
        setReadOnly={false}
        id="editor"
        style={{ height: '56vh', width: '53vw', fontSize: '2vh' }}
        ref={instance => { this.ace = instance; }} // Let's put things into scope
      />
    );
  }
}

export default Editor