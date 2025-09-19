import Layout from "@/components/Layout";
import EnhancedEroiLab from "@/components/EnhancedEroiLab";
import SEOHead from "@/components/SEOHead";

const EroiLab = () => {
  return (
    <Layout showSidebar={true}>
      <SEOHead page="eroi-lab" customTitle="EROI Lab - Interactive Environmental ROI Calculator | Humblify" />
      <EnhancedEroiLab />
    </Layout>
  );
};

export default EroiLab;