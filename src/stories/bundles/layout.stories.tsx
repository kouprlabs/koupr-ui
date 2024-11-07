import type { Meta, StoryObj } from '@storybook/react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../common/layout'
import {
  ParagraphGroups,
  ParagraphOrganizations,
  ParagraphWorkspaces,
} from '../common/paragraphs'

const meta: Meta<typeof Layout> = {
  title: 'Bundles/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Layout>

export const Default: Story = {
  args: {
    children: (
      <Routes>
        <Route path="/workspace" element={<ParagraphWorkspaces />} />
        <Route path="/group" element={<ParagraphGroups />} />
        <Route path="/organization" element={<ParagraphOrganizations />} />
      </Routes>
    ),
  },
}
