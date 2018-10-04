import * as React from "react";
import {Address} from "../../Util/model";
import {ArrowRightIcon} from "../../Components/Icons/Icons";
import ButtonWithIcon from "../../Components/Buttons/ButtonWithIcon";
import "./address-form.scss";

interface Props {
    addresses: {
        shipping: Address;
        billing: Address;
    };
    onNextStep: (shipping: Address, billing: Address) => any;
}

interface State {
    shipping: Address;
    billing: Address;
    shippingEqualBilling: boolean;
}

class ShippingAndBillingAddress extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            shipping: this.props.addresses.shipping,
            billing: this.props.addresses.billing,
            shippingEqualBilling: true,
        };
    }

    public render() {
        // code not optimized... at all

        const updateShipping = (key: string) => (e: any) => {
            this.setState({shipping: {...this.state.shipping, [key]: e.target.value}});
        };

        const updateBilling = (key: string) => (e: any) => {
            this.setState({billing: {...this.state.billing, [key]: e.target.value}});
        };

        const setShippingEqualBilling = (e: any) => {
            this.setState({shippingEqualBilling: !this.state.shippingEqualBilling});
        };

        return (
            <div>
                <form onSubmit={this.nextStep} className="address-form">
                    <div className="separator">Lieferadresse:</div>
                    <div/>

                    <div>

                        <label>Name</label>
                        <input
                            required={true}
                            value={this.state.shipping.name}
                            onChange={updateShipping("name")}
                        />
                    </div>
                    <div>
                        <label>Stadt</label>
                        <input
                            required={true}
                            value={this.state.shipping.city}
                            onChange={updateShipping("city")}
                        />
                    </div>
                    <div>
                        <label>Postleitzahl</label>
                        <input
                            required={true}
                            value={this.state.shipping.citycode}
                            onChange={updateShipping("citycode")}
                        />
                    </div>
                    <div>
                        <label>Straße und Hausnummer</label>
                        <input
                            required={true}
                            value={this.state.shipping.street}
                            onChange={updateShipping("street")}
                        />
                    </div>

                    {!this.state.shippingEqualBilling &&
                    <>
                        <div className="separator billing">Rechnungsadresse:</div>
                        <div/>

                        <div>
                            <label>Name</label>
                            <input
                                required={true}
                                value={this.state.billing.name}
                                onChange={updateBilling("name")}
                            />
                        </div>
                        <div>
                            <label>Stadt</label>
                            <input
                                required={true}
                                value={this.state.billing.city}
                                onChange={updateBilling("city")}
                            />
                        </div>
                        <div>
                            <label>Postleitzahl</label>
                            <input
                                required={true}
                                value={this.state.billing.citycode}
                                onChange={updateBilling("citycode")}
                            />
                        </div>
                        <div>
                            <label>Straße und Hausnummer</label>
                            <input
                                required={true}
                                value={this.state.billing.street}
                                onChange={updateBilling("street")}
                            />
                        </div>
                    </>
                    }

                    <div>
                        <span>Liefer- und Rechnungsadresse identisch</span>
                        <input
                            type="checkbox"
                            checked={this.state.shippingEqualBilling}
                            onChange={setShippingEqualBilling}
                        />
                    </div>

                    <div className="display-flex">

                        <div className="next-step">
                            <ButtonWithIcon
                                icon={ArrowRightIcon}
                                text={"Weiter"}
                                type="submit"
                            />
                        </div>
                    </div>
                </form>

            </div>
        );
    }

    private nextStep = (e: any) => {
        e.preventDefault();

        const billing = this.state.shippingEqualBilling ? this.state.shipping : this.state.billing;
        this.props.onNextStep(this.state.shipping, billing);
    }
}

export default ShippingAndBillingAddress;
