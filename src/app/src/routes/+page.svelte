<script lang="ts">
    import SceneInspector from "../components/SceneInspector.svelte";
    import SceneView from "../components/SceneView.svelte";
    import EditorInspector from "../components/inspector/EditorInspector.svelte";
</script>

<section class="w-screen h-screen grid grid-cols-[60px_1fr_360px] gap-0.5">
    <div class="bg-dark-secondary">

    </div>
    <div class="grid grid-rows-[1fr_300px] gap-0.5">
        <SceneView />
        <SceneInspector />
    </div>
    <EditorInspector />
</section>