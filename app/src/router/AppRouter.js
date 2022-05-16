import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { startChecking } from "../redux/actions/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { UserRoute } from "./UserRoute";
import { OwnerRoute } from "./OwnerRoute";
import { AdminRoute } from "./AdminRoute";
import { HomeView } from "../views/HomeView";
import { LoginView } from "../views/LoginView";
import { RegisterView } from "../views/RegisterView";
import { DestinationsView } from "../views/DestinationsView";
import { DestinationView } from "../views/DestinationView";
import { ActivityView } from "../views/ActivityView";
import { SpecieView } from "../views/SpecieView";
import { ReportView } from "../views/ReportView";
import { DestinationNewView } from "../views/DestinationNewView";
import { DestinationEditView } from "../views/DestinationEditView";
import { ReportsView } from "../views/ReportsView";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { startLoadDestinations } from "../redux/actions/user";
import { AboutView } from "../views/AboutView";
import { ContactView } from "../views/ContactView";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { authCheck } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking());
        dispatch(startLoadDestinations());
    }, [dispatch]);

    if (authCheck) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <HomeView  />
                    } />
                    <Route path="/about" element={
                        <div className="container">
                            <AboutView  />
                        </div>
                    } />
                    <Route path="/contact" element={
                        <div className="container">
                            <ContactView  />
                        </div>
                    } />
                    <Route path="/login" element={
                        <PublicRoute>
                            <LoginView />
                        </PublicRoute>
                    } />
                    <Route path="/register" element={
                        <PublicRoute>
                            <RegisterView role={"USER_ROLE"} />
                        </PublicRoute>
                    } />
                    <Route path="/owner/register" element={
                        <PublicRoute>
                            <RegisterView role={"OWNER_ROLE"} />
                        </PublicRoute>
                    } />
                    <Route path="/admin/register" element={
                        <PublicRoute>
                            <RegisterView role={"ADMIN_ROLE"} />
                        </PublicRoute>
                    } />
                    <Route path="/user/" element={
                        <UserRoute>
                            <DestinationsView />
                        </UserRoute>
                    } />
                    <Route path="/user/destination/:id" element={
                        <UserRoute>
                            <DestinationView />
                        </UserRoute>
                    } />
                    <Route path="/user/destination/:id/activity/:idActivity" element={
                        <UserRoute>
                            <ActivityView />
                        </UserRoute>
                    } />
                    <Route path="/user/destination/:id/specie/:idSpecie" element={
                        <UserRoute>
                            <SpecieView />
                        </UserRoute>
                    } />
                    <Route path="/user/report/:id" element={
                        <UserRoute>
                            <ReportView />
                        </UserRoute>
                    } />
                    <Route path="/owner/" element={
                        <OwnerRoute>
                            <DestinationsView />
                        </OwnerRoute>
                    } />
                    <Route path="/owner/destination/new" element={
                        <OwnerRoute>
                            <DestinationNewView />
                        </OwnerRoute>
                    } />
                    <Route path="/owner/destination/:id" element={
                        <OwnerRoute>
                            <DestinationView />
                        </OwnerRoute>
                    } />
                    <Route path="/owner/destination/:id/edit" element={
                        <OwnerRoute>
                            <DestinationEditView />
                        </OwnerRoute>
                    } />
                    <Route path="/admin/" element={
                        <AdminRoute>
                            <DestinationsView />
                        </AdminRoute>
                    } />
                    <Route path="/admin/destination/:id" element={
                        <AdminRoute>
                            <DestinationView />
                        </AdminRoute>
                    } />
                    <Route path="/admin/reports" element={
                        <AdminRoute>
                            <ReportsView />
                        </AdminRoute>
                    } />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
