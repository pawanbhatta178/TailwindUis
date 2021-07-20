import { Switch as NSwitch } from '@headlessui/react'

interface ISwitchProps extends IBaseProps {
    label?: string | React.ReactNode;
    enabled: boolean;
    onChange: () => void;
}


export const Switch: React.FC<ISwitchProps> = ({ label, enabled, onChange }) => {


    return (
        <NSwitch.Group>
            <div className="flex items-center justify-between ">
                {label && <NSwitch.Label >{label}</NSwitch.Label>}
                <NSwitch
                    checked={enabled}
                    onChange={onChange}
                    className={`${enabled ? 'bg-purple-600' : 'bg-gray-200'
                        } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
                >
                    <span
                        className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                    />
                </NSwitch>
            </div>
        </NSwitch.Group>
    )
}