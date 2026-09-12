import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    hero: singleton({
      label: 'Hero & Studio Meta',
      path: '../src/content/hero/index',
      format: { data: 'json' },
      schema: {
        siteTitle: fields.text({
          label: 'Site Title',
          defaultValue: 'CREATIVE ENGINEER',
          validation: { isRequired: true },
        }),
        siteSubtitle: fields.text({
          label: 'Site Subtitle',
          defaultValue: 'BUILDING SYSTEMS THAT WORK',
          validation: { isRequired: true },
        }),
        heroStatement: fields.text({
          label: 'Hero Statement',
          multiline: true,
          defaultValue: 'Bridging emergent technology and the enduring craft of human storytelling.',
          validation: { isRequired: true },
        }),
        heroSubtext: fields.text({
          label: 'Hero Subtext',
          multiline: true,
          defaultValue:
            'An independent technical and creative practice operating between Dubai and Hyderabad. We build custom digital platforms, automate repetitive tasks, and design visual experiences that stand out in a crowded digital space',
          validation: { isRequired: true },
        }),
        studioStatus: fields.text({
          label: 'Studio Status',
          defaultValue: 'ACCEPTING SELECT PROJECTS  — Q3/Q4',
        }),
        location: fields.text({
          label: 'Location',
          defaultValue: 'DUBAI / HYDERABAD',
        }),
        coordinates: fields.text({
          label: 'Coordinates',
          defaultValue: '25.2048° N, 55.2708° E',
        }),
        year: fields.text({
          label: 'Established Year',
          defaultValue: 'EST. 2026',
        }),
      },
    }),
  },
  collections: {
    anthology: collection({
      label: 'Anthology Spots',
      slugField: 'title',
      path: '../src/content/anthology/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { isRequired: true },
          },
        }),
        badge: fields.text({
          label: 'Badge / Label',
          defaultValue: 'AI WORKFLOW',
        }),
        tag: fields.text({
          label: 'Tag',
          defaultValue: 'AI WORKFLOW',
        }),
        aspectRatio: fields.select({
          label: 'Aspect Ratio',
          options: [
            { label: '9:16 Vertical', value: '9:16' },
            { label: '16:9 Horizontal', value: '16:9' },
          ],
          defaultValue: '9:16',
        }),
        fullVideoUrl: fields.text({
          label: 'Full Video URL (Cloudinary / MP4)',
        }),
        videoUrl: fields.text({
          label: 'Alternative Video URL',
        }),
        heroReelUrl: fields.text({
          label: 'Hero Reel URL',
        }),
        prompts: fields.array(fields.text({ label: 'Prompt Directive' }), {
          label: 'Prompt Directives',
          itemLabel: (props) => props.value || 'Prompt Directive',
        }),
        content: fields.markdoc({
          label: 'Content / Markdown Context',
        }),
      },
    }),
  },
});
