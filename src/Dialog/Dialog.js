import React, { PureComponent, PropTypes, Children } from 'react';
import Button from '../Button';
import Form from '../Form';
import { getStyles } from '../themes';
import * as styles from './styles';

const DialogWrapper = getStyles(styles, 'div', true);

export default class Dialog extends PureComponent {
  onSubmit = () => {
    if (this.submitButton) this.submitButton.click();
    else this.props.onSubmit();
  };

  getFormButtonRef = node => {
    this.submitButton = node;
  };

  render() {
    const {
      modal, open, fullWidth, title, children, actions, noHeader, noFooter,
      submitText, onDismiss, ...rest
    } = this.props;
    const schema = rest.schema;

    return (
      <DialogWrapper open={open} fullWidth={fullWidth}>
        <div onClick={!modal && onDismiss} />
        <div>
          {!noHeader &&
            <div className="mc-dialog--header">
              <div>{schema ? schema.title || title : title}</div>
              {!modal && <button onClick={onDismiss}>×</button>}
            </div>
          }
          <div className="mc-dialog--body">
            {children}
            {schema &&
              <Form {...rest}>{!noFooter &&
                <input type="submit" ref={this.getFormButtonRef} className="mc-dialog--hidden" />
              }</Form>
            }
          </div>
          {!noFooter && (actions ? <div>{Children.toArray(actions)}</div> :
            <div className="mc-dialog--footer">
              <Button onClick={onDismiss}>Cancel</Button>
              <Button primary onClick={this.onSubmit}>
                {submitText || 'Submit'}
              </Button>
            </div>
          )}
        </div>
      </DialogWrapper>
    );
  }
}

Dialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.any,
  actions: PropTypes.node,
  submitText: PropTypes.string,
  fullWidth: PropTypes.bool,
  noHeader: PropTypes.bool,
  noFooter: PropTypes.bool,
  modal: PropTypes.bool,
  onDismiss: PropTypes.func,
  onSubmit: PropTypes.func
};
