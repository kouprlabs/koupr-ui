// @ts-expect-error ignored
import { IconInfo, SwitchCard } from '@koupr/ui'
import { Meta, StoryObj } from '@storybook/react'
import cx from 'classnames'

const meta: Meta<typeof SwitchCard> = {
  title: 'Components/Switch Card',
  component: SwitchCard,
}

export default meta
type Story = StoryObj<typeof SwitchCard>

export const NotCollapsed: Story = {
  args: {
    icon: <IconInfo />,
    label: 'Show info',
    isCollapsed: false,
    localStorageNamespace: 'switch-card',
    expandedMinWidth: '200px',
    children: (
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Duis nascetur
        magnis morbi laoreet; montes porta. Pulvinar nunc per accumsan sed
        suspendisse sit sapien. Venenatis maximus inceptos taciti vestibulum
        porta sagittis quisque ipsum erat. Risus sodales conubia leo facilisi
        dignissim potenti senectus. Lectus feugiat ornare amet iaculis metus
        inceptos adipiscing placerat. Vestibulum faucibus facilisis viverra
        magna litora. Molestie lorem leo malesuada dictumst porta erat sagittis
        ullamcorper sollicitudin. Hendrerit ante maximus tincidunt, venenatis
        mauris molestie.
      </p>
    ),
  },
  render: (args) => (
    <div className={cx('w-[300px]')}>
      <SwitchCard {...args} />
    </div>
  ),
}

export const Collapsed: Story = {
  args: {
    icon: <IconInfo />,
    label: 'Show info',
    isCollapsed: true,
    localStorageNamespace: 'switch-card',
    expandedMinWidth: '200px',
    children: (
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Duis nascetur
        magnis morbi laoreet; montes porta. Pulvinar nunc per accumsan sed
        suspendisse sit sapien. Venenatis maximus inceptos taciti vestibulum
        porta sagittis quisque ipsum erat. Risus sodales conubia leo facilisi
        dignissim potenti senectus. Lectus feugiat ornare amet iaculis metus
        inceptos adipiscing placerat. Vestibulum faucibus facilisis viverra
        magna litora. Molestie lorem leo malesuada dictumst porta erat sagittis
        ullamcorper sollicitudin. Hendrerit ante maximus tincidunt, venenatis
        mauris molestie.
      </p>
    ),
  },
  render: (args) => (
    <div className={cx('w-[300px]')}>
      <SwitchCard {...args} />
    </div>
  ),
}
